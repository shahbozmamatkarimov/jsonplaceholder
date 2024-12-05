<template>
  <div class="relative">
    <!-- <h1>{{ title }}</h1> -->
    <input @input="handleInput" @focus="handleFocus" :type="type" :id="id" v-model="inputValue" class="peer focus:placeholder-[#b3b3b3] placeholder-transparent"
      :placeholder="placeholder" :required="requiredValue" />
    <label :for="id"
      class="absolute text-sm _ca1 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
      {{ label }}
    </label>
  </div>
  <div v-if="maxValue" class="text-end text-sm !-mt-0">{{ inputValue.length }}/{{ maxValue }}</div>
</template>

<script>
export default {
  name: 'FloatingInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: 'floating_outlined'
    },
    // title: {
    //   type: String,
    // },
    label: {
      type: String,
      default: 'Floating outlined'
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text'
    },
    maxValue: {
      type: Number,
    },
    is_select: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      inputValue: this.modelValue, // Use a local variable for binding
    };
  },
  watch: {
    modelValue(newVal) {
      // Sync the local value when the prop changes
      this.inputValue = newVal;
    }
  },
  computed: {
    requiredValue() {
      return this.required;
    }
  },
  methods: {
    handleInput(event) {
      let value = event.target.value;
      if (this.maxValue) {
        value = value.slice(0, this.maxValue);
      }
      this.inputValue = value;
      this.$emit('update:modelValue', value);
    },
    handleFocus(event) {
      if (this.$props.is_select) {
        event.target.select();
      }
    },
  },
};
</script>

<style scoped></style>
