import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CategoryDataTable } from "./data-table/category-data-table"

export function CategoryLayout () {
    return (
        <div className="flex flex-col py-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
            <BreadcrumbSeparator />
 
            <BreadcrumbItem>
                <BreadcrumbPage>Categories</BreadcrumbPage>
                    <BreadcrumbSeparator />
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div>
                <CategoryDataTable />
            </div>
        </div>
    )
}