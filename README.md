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
