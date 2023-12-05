<template>
  <section>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Design Details
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-600">
              Please be specific to get an accurate quote.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="mx-4 overflow-hidden rounded-md shadow sm:mx-0">
            <section id="design-details" class="px-4 py-5 bg-white sm:p-6">
              <!-- start inputs -->
              <div class="grid grid-cols-2 gap-6">
                <div class="col-span-6 sm:col-span-1">
                  <input id="hiddenQty" v-model="emitData.quantity" name="Quantity" type="hidden">
                  <CustomSelect :title="'Quantity'" :options="quantityList" @chosen="updateQty" />
                </div>
                <!-- where other input was -->
                <div class="col-span-6 sm:col-span-1">
                  <div class="flex justify-between">
                    <label for="deadline" class="block text-sm font-medium leading-5 text-gray-700">Deadline</label>
                    <span id="deadline-optional" class="text-sm leading-5 text-gray-500">Optional</span>
                  </div>
                  <div class="relative mt-1 rounded-md shadow-sm">
                    <input
                      id="deadline"
                      type="date"
                      placeholder="mm/dd/yyyy"
                      name="Deadline"
                      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      aria-describedby="deadline-optional"
                    >
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <label for="description" class="block text-sm font-medium leading-5 text-gray-700">
                  Description
                </label>
                <div class="rounded-md shadow-sm">
                  <textarea
                    id="description"
                    v-model="emitData.description"
                    name="Design Details"
                    rows="3"
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="A circular lapel pin with the state of Texas in the center."
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Brief description of your design -  add detail if you do not have reference files.
                </p>
              </div>
              <!-- <CustomFileInput class="hidden" @file="newFile" /> -->
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700">
                  Reference file(s)
                </label>
                <div class="mt-1 grid grid-cols-5 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div v-if="isFiles" class="col-span-5 mb-4 md:mb-0 md:col-span-2 bg-gray-100 rounded space-x-2 flex items-center px-2 py-2 h-full">
                    <img v-for="img in emitData.referenceFiles" :key="img" class="h-20 w-20 rounded object-cover shadow" :src="img">
                  </div>
                  <section class="flex justify-center" :class="isFiles ? 'col-span-5 md:col-span-3' : 'col-span-5'">
                    <div class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <!-- <div v-if="!isFiles" class="flex text-sm text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            multiple
                            name="file-upload"
                            type="file"
                            class="sr-only"
                            @change="processFiles"
                          >
                        </label>
                        <p class="pl-1">
                          (one at a time)
                        </p>
                      </div> -->
                      <div class="flex text-sm text-gray-600">
                        <label v-for="f in emitData.referenceFiles.length + 1" v-show="f === emitData.referenceFiles.length + 1" :key="f" :for="'file-input-' + f" class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                          <span>Upload a file</span>
                          <input
                            :id="'file-input-' + f"
                            multiple
                            :name="'file-input-' + f"
                            type="file"
                            class="sr-only"
                            @change="processFiles"
                          >
                        </label>
                        <p class="pl-1">
                          (one at a time)
                        </p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </section>
            <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <span class="inline-flex ml-2 rounded-md shadow-sm">
                <!-- <button class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-blue-700" @click.prevent="scrollQuote('contact-info')">
                  Continue
                  :files-length="fileLength"
                </button> -->
                <button :class="[greyed ? 'text-gray-700 bg-gray-100 hover:bg-gray-50 active:bg-gray-200' : 'text-white bg-blue-600 hover:bg-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:bg-blue-500 active:bg-blue-600']" class="px-4 py-2 text-sm font-medium transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm focus:outline-none" @click.prevent="scrollQuote('contact-info')">
                  Continue
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-200" />
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Contact Information
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="mx-4 overflow-hidden rounded-md shadow sm:mx-0">
            <section id="contact-info" class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
                  <input
                    id="first_name"
                    v-model="name"
                    type="text"
                    name="First Name"
                    required
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
                  >
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                  <input
                    id="last_name"
                    v-model="lastName"
                    type="text"
                    name="Last Name"
                    required
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
                  >
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="email_address" class="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                  <input
                    id="email_address"
                    v-model="emitData.email"
                    type="text"
                    name="Email"
                    required
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
                  >
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="phone_num" class="block text-sm font-medium leading-5 text-gray-700">Phone number</label>
                  <input
                    id="phone_num"
                    v-model="emitData.phone"
                    type="text"
                    name="Phone"
                    required
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
                  >
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <input id="hiddenCountry" v-model="emitData.country" type="hidden">
                  <CustomSelect :title="'Country'" :options="countryList" @chosen="updateCountry" />
                </div>

                <div class="col-span-6">
                  <label for="street_address" class="block text-sm font-medium leading-5 text-gray-700">Street address</label>
                  <input
                    id="street_address"
                    v-model="emitData.address"
                    type="text"
                    name="Street Address"
                    required
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
                  >
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label for="city" class="block text-sm font-medium leading-5 text-gray-700">City</label>
                  <input
                    id="city"
                    v-model="emitData.city"
                    type="text"
                    name="City"
                    required
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
                  >
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="state" class="block text-sm font-medium leading-5 text-gray-700">State / Province</label>
                  <select id="state" v-model="emitData.state" required class="block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" name="state">
                    <option value="Select a State">
                      Select a State
                    </option>
                    <option value="AL">
                      Alabama
                    </option>
                    <option value="AK">
                      Alaska
                    </option>
                    <option value="AZ">
                      Arizona
                    </option>
                    <option value="AR">
                      Arkansas
                    </option>
                    <option value="CA">
                      California
                    </option>
                    <option value="CO">
                      Colorado
                    </option>
                    <option value="CT">
                      Connecticut
                    </option>
                    <option value="DE">
                      Delaware
                    </option>
                    <option value="DC">
                      District Of Columbia
                    </option>
                    <option value="FL">
                      Florida
                    </option>
                    <option value="GA">
                      Georgia
                    </option>
                    <option value="HI">
                      Hawaii
                    </option>
                    <option value="ID">
                      Idaho
                    </option>
                    <option value="IL">
                      Illinois
                    </option>
                    <option value="IN">
                      Indiana
                    </option>
                    <option value="IA">
                      Iowa
                    </option>
                    <option value="KS">
                      Kansas
                    </option>
                    <option value="KY">
                      Kentucky
                    </option>
                    <option value="LA">
                      Louisiana
                    </option>
                    <option value="ME">
                      Maine
                    </option>
                    <option value="MD">
                      Maryland
                    </option>
                    <option value="MA">
                      Massachusetts
                    </option>
                    <option value="MI">
                      Michigan
                    </option>
                    <option value="MN">
                      Minnesota
                    </option>
                    <option value="MS">
                      Mississippi
                    </option>
                    <option value="MO">
                      Missouri
                    </option>
                    <option value="MT">
                      Montana
                    </option>
                    <option value="NE">
                      Nebraska
                    </option>
                    <option value="NV">
                      Nevada
                    </option>
                    <option value="NH">
                      New Hampshire
                    </option>
                    <option value="NJ">
                      New Jersey
                    </option>
                    <option value="NM">
                      New Mexico
                    </option>
                    <option value="NY">
                      New York
                    </option>
                    <option value="NC">
                      North Carolina
                    </option>
                    <option value="ND">
                      North Dakota
                    </option>
                    <option value="OH">
                      Ohio
                    </option>
                    <option value="OK">
                      Oklahoma
                    </option>
                    <option value="OR">
                      Oregon
                    </option>
                    <option value="PA">
                      Pennsylvania
                    </option>
                    <option value="RI">
                      Rhode Island
                    </option>
                    <option value="SC">
                      South Carolina
                    </option>
                    <option value="SD">
                      South Dakota
                    </option>
                    <option value="TN">
                      Tennessee
                    </option>
                    <option value="TX">
                      Texas
                    </option>
                    <option value="UT">
                      Utah
                    </option>
                    <option value="VT">
                      Vermont
                    </option>
                    <option value="VA">
                      Virginia
                    </option>
                    <option value="WA">
                      Washington
                    </option>
                    <option value="WV">
                      West Virginia
                    </option>
                    <option value="WI">
                      Wisconsin
                    </option>
                    <option value="WY">
                      Wyoming
                    </option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="postal_code" class="block text-sm font-medium leading-5 text-gray-700">ZIP / Postal</label>
                  <input
                    id="postal_code"
                    v-model="emitData.zip"
                    type="text"
                    name="postal_code"
                    required
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
                  >
                </div>
              </div>
            </section>
            <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <!-- <button v-if="greyed" type="submit" class="px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:bg-blue-500 active:bg-blue-600">
                Submit Quote
              </button> -->
              <button v-if="!allInfo" type="button" class="text-gray-700 bg-gray-100 hover:bg-gray-50 active:bg-gray-200 px-4 py-2 ml-2 text-sm font-medium transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm focus:outline-none" @click.prevent="emitError">
                Submit Quote
              </button>
              <button v-else type="submit" class="text-white bg-blue-600 hover:bg-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:bg-blue-500 active:bg-blue-600 px-4 py-2 ml-2 text-sm font-medium transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm focus:outline-none" @click.prevent="submitHandler">
                Submit Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- old end of quote step -->
  </section>
</template>

<script>
import CustomSelect from '~/components/CustomSelect'
export default {
  name: 'TwoColForm',
  components: {
    CustomSelect
  },
  props: {
    greyed: {
      type: Boolean,
      default: true
    },
    product: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      emitData: {
        quantity: '100',
        state: 'Select a State',
        country: 'United States',
        description: '',
        referenceFiles: [],
        proofs: [],
        zip: '',
        email: '',
        phone: '',
        name: '',
        address: ''
      },
      name: '',
      lastName: '',
      countryList: [
        'United States',
        'Canada',
        'Mexico'
      ]
    }
  },
  computed: {
    correctLength () {
      return this.isFiles ? this.emitData.referenceFiles.length : 1
    },
    isFiles () {
      return this.emitData.referenceFiles.length > 0
    },
    quantityList () {
      return [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        '1000+'
      ]
    },
    allInfo () {
      const data = [this.emitData.zip, this.emitData.phone,
        this.emitData.name, this.emitData.email, this.emitData.address]
      for (let i = 0; i < data.length; i++) {
        const element = data[i]
        if (element === '') {
          return false
        }
      }
      return true
    },
    fullName () {
      return (this.name + ' ' + this.lastName)
    }
  },
  watch: {
    allInfo (newVal) {
      if (newVal) {
        this.$emit('info')
      }
    },
    // emits data to quoteWrapper
    emitData (newVal) {
      this.$emit('changed', newVal)
    },
    fullName (newVal) {
      this.emitData.name = newVal
    }
  },
  methods: {
    processFiles (event) {
      // const image = document.getElementById('imgSpot')
      this.emitData.referenceFiles.push(URL.createObjectURL(event.target.files[0]))
      console.log(event.target.files[0])
    },
    submitHandler () {
      if (this.allInfo) {
        this.$emit('submitted')
      }
    },
    scrollQuote (elem) {
      this.$emit('scroll', elem)
    },
    updateQty (val) {
      this.emitData.quantity = val
    },
    emitError () {
      this.$emit('need')
    },
    updateCountry (val) {
      this.emitData.country = val
    },
    newFile (link) {
      console.log('new url seen: ' + link)
      this.emitData.referenceFiles.push(link)
    }
  }
}
</script>
