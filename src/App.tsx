import { Routes, Route } from "react-router-dom"
import { CategoryLayout } from "./cases/categories/components/category-layout"
import { CategoryForm } from "./cases/categories/components/category-form"
import { BrandLayout } from "./cases/brands/components/brand-layout"
import { BrandForm } from "./cases/brands/components/brand-form"
import { ProductLayout } from "./cases/products/components/product-layout"
import { ProductForm } from "./cases/products/components/product-form"

import { ToastContainer } from "react-toastify"

function App() {

  return (
    <div className="wrapper">
      
      <main>
        <Routes>
          <Route path="/categories" element={<CategoryLayout />} />
          <Route path="new" element={<CategoryForm />} />
          <Route path=":id" element={<CategoryForm />} />

          <Route path="/brands" element={<BrandLayout />} />
          <Route path="new" element={<BrandForm />} />
          <Route path=":id" element={<BrandForm />} />

          <Route path="/products" element={<ProductLayout />} />
          <Route path="new" element={<ProductForm />} />
          <Route path=":id" element={<ProductForm />} />

        </Routes>
      </main>

      <ToastContainer />

    </div>
  )
}

export default App

