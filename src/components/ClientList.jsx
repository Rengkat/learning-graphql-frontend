import { FaTrash } from "react-icons/fa";
const ClientList = () => {
  const headings = ["No", "Name", "Email", "Phone", ""];
  const clients = [1, 2, 3, 4, 5, 7, 8, 9, 0];
  return (
    <div className="pt-2 pb-2 border-b-[1px]">
      <div className="grid grid-cols-5 font-semibold bg-gray-300 py-3">
        {headings.map((heading) => (
          <div key={heading}>{heading}</div>
        ))}
      </div>
      <div className="">
        {clients.map((client) => {
          return (
            <div key={client} className="grid grid-cols-5 py-[5px]">
              <div>1</div>
              <div>Alexander Rengkat</div>
              <div>alexrengkat@gmail.com</div>
              <div>0806750506</div>
              <div>
                <div>
                  <FaTrash />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientList;
