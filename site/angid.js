const modal = new bootstrap.Modal(document.getElementById('modal'));
const submitBtn = document.querySelector('#formSubmit');

const imageUrlTarget = document.querySelector('#imageUrl');
const modelTarget = document.querySelector('#model');
const brandTarget = document.querySelector('#brand');
const priceTarget = document.querySelector('#price');

const carsTarget = document.querySelector('#cars');

const getCars = async () => {
  const res = await fetch('http://localhost:3333/api/cars');
  const data = await res.json();
  console.log(data);
  return data;
};

const currencyFormatter = (value) => {
  return new Intl.NumberFormat('mn-MN', { maximumSignificantDigits: 3 }).format(value);
};

const getCarCard = (car) => {
  return ` <div class="col-3">
                <div class="card">
                    <div class="ratio ratio-4x3">
                        <img class="card-img-top"
                            src="${car.imageUrl}" alt="">
                    </div>
                    <div class="card-body">
                        <p class="card-name">${car.model}</p>
                        <p class="card-category">${car.brand}</p>
                        <p class="card-price">${currencyFormatter(car.price)}T</p>
                        <div class="d-flex justify-content-end gap-3">
                          <button type="button" class="btn btn-success">Zasah</button>
                          <button type="button" class="btn btn-danger" onclick="deleteCar(${car.id})">
                            Ustgah
                          </button>
                        </div>
                    </div>
                </div>
            </div>`;
};

const getCarsHtml = async () => {
  carsTarget.innerHTML = '';
  const cars = await getCars();
  for (const car of cars) {
    carsTarget.innerHTML += getCarCard(car);
  }
};

getCarsHtml();

submitBtn.addEventListener('click', async () => {
  const newCar = {
    imageUrl: imageUrlTarget.value,
    model: modelTarget.value,
    brand: brandTarget.value,
    price: priceTarget.value,
  };
  const req = await fetch('http://localhost:3333/api/cars', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newCar),
  });
  const res = await req.json();
  console.log(res);
  getCarsHtml();
});

const deleteCar = (id) => {
  if (confirm('Ustgahuu?'))
    fetch('http://localhost:3333/api/cars', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .catch((res) => res.json())
      .finally((err) => {
        console.warn(err);
        alert('amjilttai ustgalaa');
        getCarsHtml();
      });
};

const getCar = async (id) => {
  const res = await fetch('http://localhost:3333/api/cars/' + id);
  const data = await res.json();
  return data;
};

const updatedCar = () => {
  const updatedCar = {
    //updated car model with car id
  };
  fetch('http://localhost:3333/api/cars', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedCar),
  });
};
