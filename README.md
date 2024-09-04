# 公共组件库

区块链研究院前端团队的公共组件库，便于在项目中复用

## 使用方法

### 通过 Submodule 的方式导入组件库：

```sh
git submodule add http://qkl.develop.server:8083/front-group/uni packages/uni //添加子模块
```

### 2. 通过 `pnpm workspace` 的方式引用组件库：

在项目根目录新建 `pnpm-workspace.yaml` 文件：

```yaml
packages:
  - 'packages/*'
```

在 `package.json` 中添加组件依赖引用：

```json
{
  "uni": "workspace:*"
}
```

新建 `.npmrc` 文件

```ini
ignore-workspace-root-check=true
```

这样在根目录使用 npm 安装依赖的时候会默认到根目录

### 3.在项目中使用组件

```vue
<script setup lang="ts">
import { Button } from 'uni'
</script>

<template>
  <Button>Uni Button</Button>
</template>
```

## Components

### Button

功能与 Element Plus Button 一致，组件二开&引用的示例组件

## 贡献代码

 - 安装 lts 版本的 nodejs

 - 终端运行 `corepack enable`

 - 推荐使用 `@antfu/ni` 工具执行 npm 命令，`ni => npm install`，`nr => npm run`

### git commit 规范

#### 标签

 - `feat` 添加了新组件、新功能

 - `fix` 修复了 bug

 - `docs` 修改了文档

 - `style` 修改代码格式

 - `chore` 添加注释、添加测试用例、升级依赖等

 - `refactor` 完全不涉及功能改动的代码重构，如果影响到了功能，请使用 `fix` 或者 `feat`

`feat` 和 `fix` 会记录到 Changelog 中，如果不是功能修改或者 bug 修复，尽量不要使用这两个标签。

#### 内容

注明改动到的组件以及改动的内容，如：`feat(Button): 添加点击按钮回调事件` 或 `feat: [Button] 添加点击按钮回调事件`

### 测试

在组件目录下的 `_story/*.stories.ts` 中添加 story，在 `__test__` 下创建单元测试，对组件功能进行测试。

提交新代码的时候需要确保所有测试用例都通过。

```sh
nr storybook

nr test:cy-run
```
