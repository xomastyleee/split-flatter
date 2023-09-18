export const getEnv = (env: string | undefined, envName: string) => {
  if (!env) {
    throw Error(`Nedd to provide environment: ${envName}`);
  }
  return env;
};
