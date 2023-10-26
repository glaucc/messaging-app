'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog'

import {
    Form,
    FormControl,
    FormItem,
    FormMessage,
    FormLabel,
    FormField
} from '@/components/ui/form'
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const formSchema = z.object({
    name: z.string().min(1, {
        message: 'Server name is required.'
    }),
    imageUrl: z.string().min(1, {
        message: 'Server image is required.'
    })
})

export const InitialModal = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            imageUrl: '',
        }
    });
    
    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return (
    
        <Dialog open={true}>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                        Customize your server
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                        Give your server a personality with a name and an image. You can always change it later.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <div className='space-y-8 px-6'>
                            <div className='flex items-center justify-center text-center'>
                                TODO: Image Upload
                            </div>

                            <FormField 
                                control={form.control}
                                name='name'
                                render={ ({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xs font-bold text-sinc-500 dark:text-secondary/70'
                                        >
                                            Server Name
                                        </FormLabel>
                                    </FormItem>
                                )

                                }
                            />
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
        
        )
}