
import { categoryIntros } from '@/lib/category-intros';

export function CategoryIntros() {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">Wallpaper Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(categoryIntros).map(([category, intro]) => (
          <div key={category} className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold capitalize">{category}</h3>
            <p className="text-gray-600">{intro}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
