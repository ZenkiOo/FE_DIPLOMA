import { List } from '../components/List';

const SomeList = () => {
  const items = ['1', '2', '3', '4'];

  return <section className="items">{<List items={items} />}</section>;
};
export { SomeList };
