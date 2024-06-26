import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "./ui/pagination";
import clsx from "clsx";
import { Table } from "@tanstack/react-table";

interface Props<TData> {
  table: Table<TData>;
}

export function CustomPagination<TData>({ table }: Props<TData>) {
  const currentIndex = table.getState().pagination.pageIndex;

  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ChevronsLeft />
      </Button>
      <Pagination className="mx-0 w-max">
        <PaginationContent>
          <PaginationItem
            className={clsx("size-9 border rounded-md text-muted-foreground", {
              hidden: currentIndex < table.getPageCount() / 2,
            })}
          >
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem
            className={clsx("", {
              hidden: currentIndex !== table.getPageCount() - 1,
            })}
            onClick={() => table.setPageIndex(currentIndex - 2)}
          >
            <Button
              variant="outline"
              size="sm"
              className="text-muted-foreground"
            >
              {currentIndex - 1}
            </Button>
          </PaginationItem>
          <PaginationItem
            className={clsx("", { hidden: !table.getCanPreviousPage() })}
            onClick={() => table.setPageIndex(currentIndex - 1)}
          >
            <Button
              variant="outline"
              size="sm"
              className="text-muted-foreground"
            >
              {currentIndex}
            </Button>
          </PaginationItem>
          <PaginationItem className="text-red-700">
            <Button variant="outline" size="sm" className="text-black">
              {currentIndex + 1}
            </Button>
            {/* current */}
          </PaginationItem>
          <PaginationItem
            className={clsx("", { hidden: !table.getCanNextPage() })}
            onClick={() => table.setPageIndex(currentIndex + 1)}
          >
            <Button
              variant="outline"
              size="sm"
              className="text-muted-foreground"
            >
              {currentIndex + 2}
            </Button>
          </PaginationItem>
          <PaginationItem
            className={clsx("", {
              hidden: currentIndex !== 0,
            })}
            onClick={() => table.setPageIndex(currentIndex + 2)}
          >
            <Button
              variant="outline"
              size="sm"
              className="text-muted-foreground"
            >
              {currentIndex + 3}
            </Button>
          </PaginationItem>
          <PaginationItem
            className={clsx("size-9 border rounded-md text-muted-foreground", {
              hidden: currentIndex > table.getPageCount() / 2,
            })}
          >
            <PaginationEllipsis />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ChevronsRight />
      </Button>
    </div>
  );
}
