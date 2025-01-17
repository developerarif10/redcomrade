import { getBlogList } from "@/queries/blogs";
import { BlogGrid, BlogGridItem } from "../blog-grid";
export async function BlogsGrid() {
  const data = await getBlogList();
  // console.log(data);
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-bold text-center mb-2">
        রক্ত সম্পর্কিত ব্লগস
      </h1>
      <p className="text-center text-sm text-neutral-500 mb-10">
        রক্তদানের গুরুত্ব নিয়ে আমাদের কিছু সাম্প্রতিক ব্লগ
      </p>
      <BlogGrid className="max-w-5xl mx-auto">
        {data.map((item, i) => (
          <BlogGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            thumbnail={item.thumbnail}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            image={item.image}
            blogId={item.id}
          />
        ))}
      </BlogGrid>
    </section>
  );
}
