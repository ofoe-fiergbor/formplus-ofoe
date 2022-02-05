import Request from "./Request";

const ApiService = (() => {
  const resource = "/public/task_templates";

  return {
    fetchAll: () => Request.get(resource),
  };
})();

export default ApiService;
