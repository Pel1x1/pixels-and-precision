declare global {
  interface Window {
    ymaps: any;
  }
}


import { useEffect } from "react";

export const AddressInput = ({
  address,
  setAddress,
  setAddressValid,
}: {
  address: string;
  setAddress: (value: string) => void;
  setAddressValid: (value: boolean) => void;
}) => {

  useEffect(() => {
    const initSuggest = () => {
      if (window.ymaps) {
        const suggestView = new window.ymaps.SuggestView("address-input");
        suggestView.events.add("select", (e: any) => {
          const value = e.get("item").value;
          setAddress(value);

          // Проверяем адрес через геокодер
          window.ymaps.geocode(value).then((res: any) => {
            const geoObject = res.geoObjects.get(0);
            if (geoObject) {
              setAddressValid(true);
            } else {
              setAddressValid(false);
            }
          });
        });
      }
    };

    if (window.ymaps) initSuggest();
    else window.ymaps.ready(initSuggest);
  }, [setAddress, setAddressValid]);

  return (
    <div className="w-full mb-4">
      <input
        id="address-input"
        type="text"
        placeholder="Введите адрес доставки"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-3 border-[rgba(219,170,80,1)] border-2 rounded"
      />
      <p className="text-gray-500 text-sm mt-1">
        Начните вводить адрес и выберите из подсказок
      </p>
    </div>
  );
};
