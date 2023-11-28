function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

// Se calculan los primeros 10 números de la secuencia Fibonacci
for (let i = 0; i < 10; i++) {
    console.log(`Fibonacci(${i}):`, fibonacci(i));
  }
  
