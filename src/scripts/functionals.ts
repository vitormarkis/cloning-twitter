
interface SpreadDataProps {
  setState: Function;
  route: string;
  queryParam?: { [key: string]: string };
}

export async function spreadData<T extends SpreadDataProps>(
  route: T['route'] = 'posts',
  queryParam: T['queryParam'] = { a: 'a' }
): Promise<Array<Object> | Object> {
  const [key, value] = Object.entries(queryParam)[0];

  const getFromRoute = () =>
    fetch(`http://localhost:3000/${route}?${key}=${value}`);
  const getFromQuery = () => fetch(`http://localhost:3000/${route}`);

  const response =
    queryParam['a'] === 'a' ? await getFromRoute() : await getFromQuery();

  const data = await response.json();
  return queryParam['a'] === 'a' ? data : data[0];
}
