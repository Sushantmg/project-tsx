import type { HeaderProps } from "../types/types";

function Header(props :HeaderProps) {
    const  {id, name, age ,gender, address,personDetails}=props;
  return (
    <div>
        {id}:{name}:{age}:{gender}:{address}
        {personDetails.map((item) =>
        <div>
            {item.id},{item.name},{item.age},{item.gender},{item.address},
            </div>
        )}
    </div>
  )
}
export default Header