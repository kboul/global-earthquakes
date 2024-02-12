const setSearchParam =
  (name: string, value: string) => (params: URLSearchParams) => {
    params.set(name, value);
    return params;
  };

export { setSearchParam };
