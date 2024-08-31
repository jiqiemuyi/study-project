module.exports = {
  types: [
    { value: "feat", name: "feat:     新功能" },
    { value: "fix", name: "fix:      修复bug" },
    { value: "docs", name: "docs:     仅文档变更" },
    {
      value: "style",
      name: "style:    不影响代码含义的更改（空格、格式、缺少分号等）",
    },
    {
      value: "refactor",
      name: "refactor: 代码重构（既不是修复bug也不是添加功能）",
    },
    { value: "perf", name: "perf:     性能优化" },
    { value: "test", name: "test:     添加测试或修正现有测试" },
    {
      value: "build",
      name: "build:    构建系统或外部依赖的更改（例如：gulp、broccoli、npm）",
    },
    {
      value: "ci",
      name: "ci:       持续集成配置文件和脚本的更改（例如：Travis、Circle、BrowserStack、SauceLabs）",
    },
    { value: "chore", name: "chore:    其他不修改src或测试文件的更改" },
    { value: "revert", name: "revert:   回滚之前的提交" },
  ],

  scopes: [
    { name: "accounts" },
    { name: "admin" },
    { name: "exampleScope" },
    { name: "changeMe" },
  ],

  // 需要与字段类型的值匹配。例如：'fix'
  scopeOverrides: {
    fix: [
      { name: "merge" },
      { name: "style" },
      { name: "e2eTest" },
      { name: "unitTest" },
    ],
  },

  // 覆盖默认消息，默认如下
  messages: {
    type: "选择你要提交的更改类型：",
    scope: "\n标记此更改的范围（可选）：",
    customScope: "标记此更改的范围：",
    subject: "写一个简短的命令式描述：\n",
    body: '提供更详细的描述（可选）。使用 "|" 换行：\n',
    breaking: "列出所有重大更改（可选）：\n",
    footer: "列出此更改关闭的所有问题（可选）。例如：#31, #34：\n",
    confirmCommit: "你确定要继续提交以上内容吗？",
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // 限制标题长度
  subjectLimit: 100,
};
