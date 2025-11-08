#!/bin/bash  
###
 # @Author: yangdongxu
 # @Date: 2024-06-27 14:43:13
 # @LastEditors: yangdongxu
 # @LastEditTime: 2024-06-27 14:44:48
 # @FilePath: \vue3-projectd:\find_work_2024_year_first\react18-app-demo\11.sh
### 
  
# 切换到脚本所在的目录（可选，如果你总是从项目根目录运行这个脚本的话）  
cd "$(dirname "$0")"  
  
# 检查npm是否已安装  
if ! command -v npm >/dev/null 2>&1; then  
    echo "Error: npm is not installed." >&2  
    exit 1  
fi  
  
# 执行npm run build命令  
echo "Running npm run build..."  
npm run demo  
  
# 检查上一个命令是否成功执行  
if [ $? -eq 0 ]; then  
    echo "Build successful!"  
else  
    echo "Build failed!"  
    exit 1  
fi