import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit Product',
        href: '/products/edit',
    },
];

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    created_at: string;
    updated_at: string;
}

interface PageProps {
    product: Product;
    flash: {
        message?: string;
    };
}

export default function Edit({ product }: PageProps) {
    const { data, setData, errors, put, processing } = useForm({
        name: product.name,
        price: product.price,
        description: product.description,
    });

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/products/${product.id}`); // ✅ use product.id
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Product" />
            <div className="w-4/12 p-4">
                <form className="space-y-4" onSubmit={handleUpdate}>
                    {Object.keys(errors).length > 0 && (
                        <div className="bg-red-500 text-white font-semibold p-3 rounded-md">
                            <ul>
                                {Object.values(errors).map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="gap-3.5 mb-4">
                        <label htmlFor="name">Name</label>
                        <Input
                            id="name"
                            placeholder="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                    </div>

                    <div className="gap-3.5 mb-4">
                        <label htmlFor="price">Price</label>
                        <Input
                            id="price"
                            type="number"
                            placeholder="price"
                            value={data.price}
                            onChange={(e) => setData('price', Number(e.target.value))}
                        />
                    </div>

                    <div className="gap-3.5 mb-4">
                        <label htmlFor="description">Description</label>
                        <Textarea
                            id="description"
                            placeholder="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                        />
                    </div>

                    <Button type="submit" disabled={processing}>
                        {processing ? 'Updating...' : 'Update Product'}
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}

