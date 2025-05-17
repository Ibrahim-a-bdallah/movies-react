import type React from "react";
import SearchIcon from "@mui/icons-material/Search";

type IProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ searchTerm, setSearchTerm }: IProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="container_header">
      <h1>MOVIES</h1>
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <SearchIcon />
      </div>
    </div>
  );
};

export default Header;
