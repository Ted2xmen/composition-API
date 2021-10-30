import { ref, watch, computed } from "vue";

export default function () {
  const exampleTitle = ref("Composable Başlık3");

  return { exampleTitle };
}
