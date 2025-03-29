interface Props {
  title: string;
  listItem: { listData: string[] }[];
}

const FooterMiddleList = ({ title, listItem }: Props) => {
  return (
    <div>
      <h3 className='font-titleFont text-white text-base font-semibold mb-3'>
        {title}
      </h3>
      <ul className='flex flex-col gap-0.5'>
        {listItem.map((item) =>
          item.listData.map((data: string) => (
            <li key={data} className='footerLink hover:underline cursor-pointer text-quantity_box/40'>
              {data}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FooterMiddleList;
