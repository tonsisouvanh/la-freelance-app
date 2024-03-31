import { Tabs } from "antd";
import type { TabsProps } from "antd";
import PackageTab from "./PackageTab";

const PackageTabs = () => {
  const items: TabsProps["items"] = [
    { key: "1", label: "ແພັກເກັດ 50.000", children: <PackageTab /> },
    { key: "2", label: "ແພັກເກັດ 70.000", children: <PackageTab /> },
    { key: "3", label: "ແພັກເກັດ 80.000", children: <PackageTab /> },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <>
      <Tabs onChange={onChange} defaultActiveKey="1" centered items={items} />
    </>
  );
};

export default PackageTabs;
