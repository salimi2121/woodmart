import FilterSection from "./FilterSection";
import { ProductsSection } from "./ProductsSection";

export default function Main() {
  return (
    <main className="pb-5">
      <div className="mx-3 mt-1 mx-xl-5 px-xl-2 pb-3">
        <div className="d-flex justify-content-between py-4">
          <div>
            <span>خانه / </span>
            <span className="fw-500">فروشگاه</span>
          </div>
          <span className="text-secondary d-1025-block d-none">در حال نمایش 6 نتیجه</span>
        </div>
        <section>
            <div className="d-flex justify-content-between py-3">
              <FilterSection />
              <ProductsSection />
            </div>
        </section>
      </div>
    </main>
  );
}
