//Loop com while e for - print hello world
counter = 0

while (counter < 5) {
  console.log("Hello World");

  counter ++
}

for (var i = 0; i < 5; i++) {
  console.log("Hello World");
}

//Loop com while e for - Números impares
n_max = 25

while (n_max != 0) {
  if (n_max%2 != 0) {
    console.log("Número impar: "+n_max);
  }
  n_max --
}

for (var n_max = 25; n_max > 0; n_max--) {
  if (n_max%2 != 0) {
    console.log("Número impar for: "+n_max);
  }
}
