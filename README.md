# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
```sh
node index.js --action="list"
```
<a href="https://ibb.co/K7TZgJQ"><img src="https://i.ibb.co/CvRdyfX/list.png" alt="list" border="0"></a>

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
```sh
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
```
<a href="https://ibb.co/547rhBQ"><img src="https://i.ibb.co/02wCyh0/get-contact-by-id.png" alt="get-contact-by-id" border="0"></a>

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
```sh
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
```
<a href="https://ibb.co/khVk2JH"><img src="https://i.ibb.co/nDqZMBg/add-contact.png" alt="add-contact" border="0"></a>

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
```sh
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
```
<a href="https://ibb.co/S5T9D0c"><img src="https://i.ibb.co/zQc0WbF/remove-contact.png" alt="remove-contact" border="0"></a>