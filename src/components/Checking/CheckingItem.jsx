export default function CheckingItem({ title, children }) {
  return (
    <div className="checking_item">
      <h3 className="checking_item__title">{title}</h3>
      <div className="checking_item__body">{children}</div>
    </div>
  );
}
