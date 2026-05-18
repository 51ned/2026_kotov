<script lang='ts'>
  import { List } from '$views/atoms'
</script>

<List orientation="vertical" variant="ordered">
  <li>Первый пункт ordered</li>
  <li>
    Второй пункт ordered с вложенным ordered
    <List orientation="vertical" variant="ordered">
      <li>Вложенный пункт а</li>
      <li>Вложенный пункт б</li>
      <li>Вложенный пункт в</li>
    </List>
  </li>
  <li>
    Третий пункт ordered с вложенным unordered
    <List orientation="vertical" variant="unordered">
      <li>Вложенный маркированный пункт</li>
      <li>Ещё один вложенный маркированный пункт</li>
    </List>
  </li>
</List>

<hr>

<List orientation="vertical" variant="unordered">
  <li>Первый пункт unordered</li>
  <li>
    Второй пункт unordered с вложенным unordered
    <List orientation="vertical" variant="unordered">
      <li>Вложенный пункт с тире</li>
      <li>Ещё один вложенный пункт с тире</li>
    </List>
  </li>
  <li>
    Третий пункт unordered с вложенным ordered
    <List orientation="vertical" variant="ordered">
      <li>Вложенный numbered</li>
      <li>Ещё один nested numbered</li>
    </List>
  </li>
</List>

<hr>

<List orientation="vertical" variant="unmarked">
  <li>Первый пункт unmarked</li>
  <li>Второй пункт unmarked</li>
  <li>
    Третий пункт unmarked с вложенным unordered
    <List orientation="vertical" variant="unordered">
      <li>Вложенный маркированный пункт</li>
      <li>Ещё один вложенный маркированный пункт</li>
    </List>
  </li>
</List>

<hr>

<List orientation="horizontal" variant="unmarked">
  <li>Главная</li>
  <li>Статьи</li>
  <li>Разборы</li>
  <li>RSS</li>
</List>

<hr>

<List orientation="horizontal" variant="unordered">
  <li>Пункт</li>
  <li>Пункт</li>
  <li>Пункт</li>
</List>

<hr>

<List orientation="horizontal" variant="ordered">
  <li>Первый</li>
  <li>Второй</li>
  <li>Третий</li>
</List>