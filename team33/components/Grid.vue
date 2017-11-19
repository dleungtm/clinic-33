<template>
  <table>
    <thead>
      <tr>
        <th v-for="attr in columns"
          @click="sortBy(attr.key)"
          :class="{ active: sortKey == attr.key }">
          {{ attr.displayName | capitalize }}
          <span class="arrow" :class="sortOrders[attr.key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
        <th v-if="hasAction1">
        </th>
        <th v-if="hasAction2">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData">
        <td v-for="attr in columns">
          {{entry[attr.key]}}
        </td>
        <td v-if="hasAction1">
          <button v-if="hasAction1(entry)" class="button--default" @click="buttonAction1(entry)">{{ buttonLabel1 }}</button>
        </td>
        <td v-if="hasAction2">
          <button v-if="hasAction2(entry)" class="button--default" @click="buttonAction2(entry)">{{ buttonLabel2 }}</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: Array,
    columns: Array,
    filterKey: String,
    hasAction1: Function,
    buttonAction1: Function,
    buttonLabel1: String,
    hasAction2: Function,
    buttonAction2: Function,
    buttonLabel2: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (attr) {
      sortOrders[attr.key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        if (sortKey.includes('date')) {
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : new Date(a) > new Date(b) ? 1 : -1) * order
          })
        } else {
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
}
</script>

<<style lang="stylus" scoped>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
  max-width: 1000px;
}

th {
  background-color: #2d3e50;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 150px;
  padding: 10px 15px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>

