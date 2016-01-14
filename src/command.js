export default function(name, usage, action) {
  return {
    getName() {
      return name;
    },
    getUsage() {
      return usage;
    },
    run() {
      return action.apply(this, arguments);
    },
  };
}
