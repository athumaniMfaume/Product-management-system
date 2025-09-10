import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Console } from 'console';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create new Product',
        href: '/products/create',
    },
];

export default function Index() {

    const { data, setData, errors, post, processing } = useForm({
      name: '',
      price: '',
      description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        // console.log(data);
        // e.preventDefault();
        e.preventDefault();
        post('/products');

    }


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a new Product" />
            <div className="w-4/12 p-4">
                <form className='space-y-4' onSubmit={handleSubmit}>

                    {Object.keys(errors).length > 0 && (
                        <div className='bg-red-500 text-white font-semibold p-3 rounded-md'>
                            <ul>
                                {Object.values(errors).map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}




                    <div className='gap-3.5 mb-4'>
                        <label htmlFor="name">Name</label>
                        <Input placeholder='name' value={data.name}
                        onChange={(e)=>setData('name', e.target.value)}></Input>
                    </div>

                    <div className='gap-3.5 mb-4'>
                        <label htmlFor="price">Price</label>
                        <Input placeholder='price' value={data.price}
                        onChange={(e)=>setData('price', e.target.value)}></Input>
                    </div>

                    <div className='gap-3.5 mb-4'>
                        <label htmlFor="description">Description</label>
                        <Textarea placeholder='description' value={data.description}
                        onChange={(e)=>setData('description', e.target.value)} />
                    </div>
                    <Button type='submit'>Create</Button>
                </form>


            </div>
        </AppLayout>
    );
}
