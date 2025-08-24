'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createAccount, signInUser } from '@/lib/actions/user.actions';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const formSchema = z.object({
  fullname: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
});

type FormType = 'sign-in' | 'sign-up';

const AuthForm = ({ type }: { type: FormType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (type === 'sign-up') {
        // Handle sign up
        console.log('Sign up data:', data);
        // await createAccount(data);
      } else {
        // Handle sign in
        console.log('Sign in data:', data);
        // await signInUser(data);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
        </h2>
        <p className="text-gray-600">
          {type === 'sign-in'
            ? 'Welcome back! Please sign in to your account.'
            : 'Create your account to get started.'}
        </p>
      </div>
      <>
        <Form {...form}>
          <form className="auth-form">
            <h1 className="form-title">
              {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
            </h1>
            {type === 'sign-up' && (
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <div className="shad-form-item">
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Full Name"
                          className="shad-input"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="shad-form-message" />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="shad-form-item">
                    <FormLabel className="shad-form-label">Email</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="shad-input"
                        {...field}
                      />
                    </FormControl>
                  </div>

                  <FormMessage className="shad-form-message" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="form-submit-button "
              disabled={isLoading}
            >
              {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
              {isLoading && (
                <Image
                  src="/assets/icons/loader.svg"
                  alt="loader"
                  width={24}
                  height={24}
                  className="ml-2 animate-spin"
                />
              )}
            </Button>
            {errorMessage && <p className="error-message">*{errorMessage}</p>}
            <div className="body-2 flex justify-center">
              <p className="text-light-100">
                {type === 'sign-in'
                  ? "Don't have an account?"
                  : 'Already have an account?'}
              </p>
              <Link
                href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
                className="ml-1 font-medium text-brand"
              >
                {' '}
                {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
              </Link>
            </div>
          </form>
        </Form>
        {/* OTP VERIFICATION */}
      </>
    </div>
  );
};

export default AuthForm;
