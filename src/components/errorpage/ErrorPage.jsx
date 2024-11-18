import React from 'react';
import ghostError from '../../assets/Images/ghostError.png';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-blue-gray via-light-pink to-neutral-gray px-4">
      <div className="text-center max-w-xl bg-white/50 px-8 py-12 my-8 shadow-lg rounded-lg">
        <img src={ghostError} alt="Ghost Error" className="w-1/2 mx-auto mb-6 animate-bounce" />
        <h2 className="text-3xl font-bold text-dark-blue-gray mb-4">
          Page Not Found (ページが見つかりません)
        </h2>
        <p className="text-mount-fuji-gray text-lg mb-6">
            Perhaps you are lost like an old forgotten street on ghost City in Japan.
          <br />
          
          Let’s go back to home and continue your adventure!
        </p>
        <Link
          to="/"
          className="btn btn-primary bg-strong-blue text-white hover:bg-sky-blue px-8 py-3 rounded-full"
        >
          ホームへ戻る (Back to Home)
        </Link>
      </div>
    </div>
  );
}
