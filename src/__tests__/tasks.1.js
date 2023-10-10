import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import Navbar from '../components/Navbar';
import User from '../components/User';
afterEach(cleanup);

const testProps = {
    theColor: 'red',
    firstName: 'John',
    avatarUrl: 'https://images.theconversation.com/files/180922/original/file-20170803-7132-14346fx.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    bootcampName: 'Llama Bootcamp',
   backColor: 'red'
};
describe("React State", () => {
    it("Navbar Should render with Approporiate Links", () => {
        render(<Navbar />);
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        const navUsername = screen.getByTestId('nav-username');
        expect(navUsername).toHaveTextContent(/\w+/);
    });
    it("Counter Button should be functional and increment on click", () => {
        render(<App />);
        expect(screen.getByText('Count is: 0')).toBeInTheDocument();
        const button = screen.getByText(/click me/i);
        button.click();
        button.click();
        expect(screen.getByText('Count is: 2')).toBeInTheDocument();
    })
    it("User Component renders, and accept props", () => {
        render(<User {...testProps} />);
        expect(screen.getByText(/Hello, John/i)).toBeInTheDocument();
        expect(screen.getByText(/Welcome to Llama Bootcamp/i)).toBeInTheDocument();
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();

    });
})