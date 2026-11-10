# LUNA7

Luna7 管理工作台静态演示版，与 2026-11-10 线上版本一致。

来源提交：`20a20ba8a25c7c6b931ef59815de0696c413816f`。

## 发布到 GitHub Pages

1. 将本目录中的 `README.md` 和整个 `docs` 文件夹上传到 `LIUJIAYU528/LUNA7` 的 `main` 分支。
2. 打开仓库 **Settings → Pages**。
3. Source 选择 **Deploy from a branch**。
4. Branch 选择 **main**，Folder 选择 **/docs**，点击 **Save**。
5. 等待 GitHub Pages 的部署任务成功，使用设置页返回的访问地址。

预计地址（部署成功前不可视为可用）：`https://liujiayu528.github.io/LUNA7/#v2-320`。

发布文件使用相对资源路径，保留原有 hash 页面入口。`docs/.nojekyll` 避免对静态文件进行 Jekyll 转换。

本版本默认业务接口未连接。演示数据明确标记，账号变更只保存到当前浏览器本地草稿，不创建真实登录凭据。更换域名后，旧域名的本地草稿不会自动迁移。

## 验证记录

- 现有导航、角色及本组账号相关测试：16 项通过。
- 发布目录来源：现有站点的 `dist/`；页面代码保持不变。
- GitHub 发布状态：尚未部署，等待仓库写入授权。
