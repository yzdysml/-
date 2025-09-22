# 破晓科创实验室网站

静态网站位于 `website/` 目录，直接用浏览器打开 `index.html` 即可预览。

## 结构
- `index.html` 首页
- `members.html` 成员
- `publications.html` 论文
- `projects.html` 项目
- `awards.html` 荣誉
- `contact.html` 联系
- `assets/css/styles.css` 样式
- `assets/js/main.js` 脚本

## 自定义
- 品牌与标题：修改各页面 `<title>` 与页眉/页脚的“破晓科创实验室”。
- 颜色：在 `assets/css/styles.css` 的 `:root` 中调整 `--primary` 等变量。
- 内容：替换页面中的示例成员、论文、项目与联系邮箱。
- 荣誉：在 `awards.html` 中增删 `<li>` 项。

## 部署
- 方案一：本地双击 `index.html`。
- 方案二：GitHub/Gitee Pages，将 `website/` 设为站点根目录。
- 方案三：Nginx/Apache，将站点根指向 `website/`。
