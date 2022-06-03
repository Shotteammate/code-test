import { useMemo } from "react";
import { tableData } from "../assets/constants/data";
import { simpleDeepClone } from "../utils/commonUtils";

const useTableData = () => {
  const rows = useMemo(() => {
    const states = simpleDeepClone(tableData?.states) ?? [];
    const districts = simpleDeepClone(tableData?.districts) ?? [];
    const townships = simpleDeepClone(tableData?.townships) ?? [];

    districts.forEach((district) => {
      if (district?.children?.length > 0) {
        district.children = townships.filter((township) =>
          district.children.includes(township.id)
        );
      }
    });

    states.forEach((state) => {
      if (state?.children?.length > 0) {
        state.children = districts.filter((district) =>
          state.children.includes(district.id)
        );
      }
    });

    return states;
  }, []);

  return rows;
};

export default useTableData;
