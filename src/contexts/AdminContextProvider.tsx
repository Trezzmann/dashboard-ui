import { createContext, useState } from "react";
import { adminsData } from "../data/adminsData";

// types

type AdminType = {
  id: string;
  name: string;
  lastLoggedIn: string;
  profileImage: string;
  active: boolean;
  email: string;
};

interface AdminContextType {
  activeTab: "profile" | "summary";
  toggleProfile: () => void;
  toggleSummary: () => void;
  filter: (val: string) => void;
  adminsList: AdminType[];
  viewAdminDetails: (id: string) => void;
  selectedAdmin: AdminType;
}

interface AdminContextProps {
  children: React.ReactElement;
}

// context

export const AdminContext = createContext<AdminContextType>(
  {} as AdminContextType
);

// context provider

const AdminContextProvider = ({ children }: AdminContextProps) => {
  const [activeTab, setActiveTab] = useState<"profile" | "summary">("profile");
  const [adminsList, setAdminsList] = useState<AdminType[]>(adminsData);
  const [selectedAdmin, setSelectedAdmin] = useState<AdminType>(adminsData[0]);

  //   toogle tab
  const toggleProfile = () => setActiveTab(() => "profile");
  const toggleSummary = () => setActiveTab(() => "summary");

  //   filter admins table
  const filter = (val: string) => {
    const list: AdminType[] = [];
    adminsData.forEach((admin) => {
      const name = admin.name.toLowerCase();
      const searchName = val.trim().toLowerCase();
      if (name.startsWith(searchName) || name.includes(searchName)) {
        list.push(admin);
      }
    });
    setAdminsList(list);
  };

  const viewAdminDetails = (id: string) => {
    const adminFound = adminsData.find((admin) => admin.id === id);
    if (adminFound) setSelectedAdmin(adminFound);
    else alert("Admin does not exist");
  };

  return (
    <AdminContext.Provider
      value={{
        activeTab,
        toggleProfile,
        toggleSummary,
        filter,
        adminsList,
        viewAdminDetails,
        selectedAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
