import React from 'react';

const loginPage = () => {
  const HandleLogIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

  };





    return (
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
           <form className="space-y-6" onSubmit={HandleLogIn}>
            <Input
              label="Email address"
              type="email"
              name="email"
              placeholder="Enter your email"
              fullWidth
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              fullWidth
              required
            />

            <Button type="submit" variant="primary" fullWidth size="lg">
              Sign in
            </Button>
          </form>
        </div>
    );
};

export default loginPage;





















