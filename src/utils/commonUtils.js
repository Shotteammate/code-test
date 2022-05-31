export const simpleDeepClone = (data) => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    // TODO: error handling popup
    console.log("Deep clone error, there may be circular reference:", error);
  }
};
