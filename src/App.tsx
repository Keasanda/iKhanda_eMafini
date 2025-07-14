import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ReturnPolicyPage from './pages/ReturnPolicyPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page !== 'product-detail') {
      setSelectedProductId(null);
    }
  };

  const handleProductSelect = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'return-policy':
        return <ReturnPolicyPage />;
      case 'product-detail':
        return selectedProductId ? (
          <ProductDetailPage 
            productId={selectedProductId} 
            onBack={() => handleNavigate('home')}
            onProductSelect={handleProductSelect}
          />
        ) : (
          <HomePage onProductSelect={handleProductSelect} />
        );
      default:
        return <HomePage onProductSelect={handleProductSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderCurrentPage()}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;