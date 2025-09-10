import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
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

interface PaginationLinks {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedProducts {
    data: Product[];
    links: PaginationLinks[];
}

interface PageProps {
    products: PaginatedProducts;
    flash: {
        message?: string;
    };
}

export default function Index() {
    const { products, flash } = usePage<PageProps>().props;
    const { processing, delete: destroy } = useForm();

    const handleDelete = (id: number, name: string) => {
        if (confirm(`Are you sure you want to delete this product ${id}. ${name}?`)) {
            destroy(`/products/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link href="/products/create">
                    <Button>Create a Product</Button>
                </Link>

                {flash.message && (
                    <div className="bg-green-500 text-white font-semibold p-3 rounded-md mb-4">
                        {flash.message}
                    </div>
                )}

                {products.data.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 bg-gray-100">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated At</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {products.data.map((product) => (
                                    <tr key={product.id} className="odd:bg-gray-100 even:bg-gray-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-black">{product.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-black">{product.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-black">{product.description}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-black">${product.price.toFixed(2)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-black">
                                            {new Date(product.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-black">
                                            {new Date(product.updated_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-black space-x-2">
                                            <Link href={`/products/${product.id}/edit`}>
                                                <Button className="bg-orange-400 hover:bg-orange-300 text-white">Edit</Button>
                                            </Link>
                                            <Button
                                                className="bg-red-500 hover:bg-red-400 text-white"
                                                disabled={processing}
                                                onClick={() => handleDelete(product.id, product.name)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="mt-4 flex justify-center space-x-2">
                            {products.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || "#"}
                                    className={`px-3 py-1 rounded-md text-sm ${
                                        link.active
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    } ${!link.url ? "opacity-50 cursor-not-allowed" : ""}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="p-4">
                        <p>No products available.</p>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}



