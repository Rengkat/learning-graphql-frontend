import { FaTrash } from "react-icons/fa";
import { gql, useQuery } from "@apollo/client";

const headings = ["No", "Name", "Email", "Phone", ""];

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const ClientList = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div className="pt-2 pb-2 border-b-[1px]">
      <div className="grid grid-cols-5 font-semibold bg-gray-300 py-3">
        {headings.map((heading) => (
          <div key={heading}>{heading}</div>
        ))}
      </div>
      <div>
        {data.clients.map((client, index) => (
          <div key={client.id} className="grid grid-cols-5 py-[5px]">
            <div>{index + 1}</div>
            <div>{client.name}</div>
            <div>{client.email}</div>
            <div>{client.phone}</div>
            <div>
              <div className="cursor-pointer">
                <FaTrash />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
