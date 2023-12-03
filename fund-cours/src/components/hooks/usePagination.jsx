import {useMemo} from "react";
import {getPagesArray} from "../../utils/pages";

export const usePagination = (totalPages) => {
    const pages = useMemo(() => {
        return getPagesArray(totalPages)
    }, [totalPages])

    return pages;
}
