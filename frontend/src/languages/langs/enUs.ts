export default {
  system: {
    hookComponent: {
      dialog: {
        defaultClose: 'Close',
        defaultConfirm: 'Agree',
        defaultTitle: 'Tips'
      }
    },
    page: {
      add: 'Add',
      update: 'Update',
      refresh: 'Refresh',
      export: 'Export',
      operate: 'Operate',
      edit: 'Edit',
      delete: 'Delete',
      close: 'Close',
      print: 'Print',
      preView: 'preView',
      submit: 'Submit',
      reset: 'Reset',
      confirm: 'Confirm',
      insertOneRow: 'Insert One Row',
      view: 'View',
      import: 'Import',
      chooseFile: 'Choose File',
      exportTemplate: 'Export Template',
      noData: 'No data'
    },
    tips: {
      success: ' success!',
      fail: ' fail!',
      beforeDeleteMessage: 'Do you want to delete this data?',
      beforeDeleteDetailMessage: 'Are you sure you want to delete this row?',
      detailLengthIsZero: 'Details verification before document submission!',
      detailHasItemRepeat: 'The details contain duplicate items!',
      noData: 'no data',
      beforeAsnConfirm: 'Confirm Arrival?',
      beforeAsnUnload: 'Confirm Unload?',
      beforeAsnSorted: 'Confirm Sorted?',
      requestTimeout: 'Request Timeout!',
      requestFail: 'Request fail.Please try it again',
      vaildEmail: 'Please enter the correct email format!',
      verifyPwd: 'Verification failed. The new password is different from the confirmed one!'
    },
    checkText: {
      checkFormFail: 'Operation failed. Please check the data and try again!',
      mustInput: 'Please fill in the ',
      mustSelect: 'Please select ',
      integer: ' integer',
      decimal: ' decimal',
      pleaseEnter: 'Please enter ',
      inputIntMsg: 'decimal places of integer part',
      inputDecimalMsg: ' decimal places of the decimal part',
      lengthValid: 'The length should be between '
    },
    homeHeader: {
      logout: 'Logout',
      changePwd: 'Change Password',
      oldPwd: 'Old password',
      newPwd: 'New password',
      confrimNewPwd: 'Confirm new password',
      log: 'System log'
    },
    combobox: {
      sex: {
        male: 'Male',
        female: 'Female'
      },
      yesOrNo: {
        yes: 'yes',
        no: 'no'
      }
    },
    pager: {
      pageSizes: '/page',
      goTo: 'Go to',
      total: 'Total',
      record: 'record'
    },
    viewLog: {
      user_name: 'Operator',
      action_content: 'Operation content',
      action_time: 'Time'
    }
  },
  router: {
    sideBar: {
      homepage: 'Home Page',
      baseModule: 'Basic Settings',
      ownerOfCargo: 'Owner Information',
      menuBasicSettings: 'Menu',
      userManagement: 'User Management',
      commodityCategorySetting: 'Commodity Category',
      commodityManagement: 'Commodity Management',
      userRoleSetting: 'User Role',
      companySetting: 'Company Information',
      freightSetting: 'Freight Setting',
      warehouseSetting: 'Warehouse Setting',
      customer: 'Customer Info',
      supplier: 'Supplier Info',
      roleMenu: 'Role Menu Settings',
      stockManagement: 'Stock Management',
      warehouseWorkingModule: 'Warehouse Working',
      warehouseProcessing: 'Warehouse Processing',
      warehouseMove: 'Inventory Move',
      warehouseFreeze: 'Inventory freeze',
      warehouseAdjust: 'Inventory Adjust',
      warehouseTaking: 'Inventory Take',
      deliveryManagement: 'Delivery Management',
      stockAsn: 'Receiving Management',
      statisticAnalysis: 'Statistic Analysis',
      saftyStock: 'Safety Stock'
    }
  },
  login: {
    welcomeTitle: 'Welcome to ModernWMS!👋🏻',
    mainButtonLabel: 'Login',
    rememberTips: 'Remember me',
    userName: 'UserName',
    password: 'Password',
    loginSuccess: 'Login succeeded!',
    notAuthority: 'Undistributed menu access the account, please contact the administrator to add it!',
    registerTips: 'No account? Click here to register!',
    register: 'Register'
  },
  homepage: {
    subTitle: 'Modern Warehouse Management System'
  },
  base: {
    freightSetting: {
      carrier: 'carrier',
      departure_city: 'Departure City',
      arrival_city: 'Arrival City',
      price_per_weight: 'Weight Fee',
      price_per_volume: 'Volume Fee',
      min_payment: 'Min Payment',
      creator: 'Creator',
      create_time: 'Create Time',
      last_update_time: 'Last Update Time',
      is_valid: 'Valid',
      freightSelectModal: 'Freight Select Modal'
    },
    userManagement: {
      user_num: 'User Num',
      user_name: 'User Name',
      user_role: 'Role',
      contact_tel: 'Contact Information',
      sex: 'Sex',
      is_valid: 'Valid',
      restPwd: 'Reset password',
      checkboxIsNull: 'Please select data!',
      beforeResetPwd: 'Are you sure you want to reset the passwords of these users?',
      afterResetPwd: 'Password reset succeeded, the new password is ',
      user_register_name: 'User Name',
      email: 'Email',
      auth_string: 'Password'
    },
    warehouseSetting: {
      warehouseSetting: 'Warehouse Setting',
      reservoirSetting: 'Reservoir Setting',
      locationSetting: 'Location Setting',
      warehourseSelectModal: 'Location Select Modal',
      locationSelectModal: 'Location Select Modal',
      email: 'Email',
      warehouse_name: 'Warehouse Name',
      city: 'City',
      address: 'Address',
      contact_tel: 'Contact Tel',
      manager: 'Manager',
      is_valid: 'Valid',
      area_name: 'Reservoir Name',
      area_property: 'Reservoir Category',
      location_name: 'Location Code',
      location_length: 'Location Length(m)',
      location_width: 'Location Width(m)',
      location_heigth: 'Location Height(m)',
      location_volume: 'Location Volume（m³）',
      location_load: 'Location Load（kg）',
      roadway_number: 'Roadway Number',
      shelf_number: 'Shelf Number',
      layer_number: 'Layer Number',
      tag_number: 'Tag Number',
      picking_area: 'Picking Area',
      stocking_area: 'Stocking Area',
      receiving_area: 'Receiving Area',
      return_area: 'Return Area',
      defective_area: 'Defective Area',
      inventory_area: 'Inventory Area',
      creator: 'Creator',
      create_time: 'Create Time',
      last_update_time: 'Last Update Time'
    },
    customer: {
      customer_name: 'Customer Name',
      city: 'City',
      address: 'Address',
      manager: 'Manager',
      email: 'Email',
      contact_tel: 'Contact Tel',
      creator: 'Creator',
      create_time: 'Create Time',
      last_update_time: 'Last Update Time',
      is_valid: 'Valid'
    },
    supplier: {
      supplier_name: 'Supplier Name',
      city: 'City',
      address: 'Address',
      email: 'Email',
      manager: 'Manager',
      contact_tel: 'Contact Tel',
      creator: 'Creator',
      create_time: 'Create Time',
      last_update_time: 'Last Update Time',
      is_valid: 'Valid'
    },
    userRoleSetting: {
      role_name: 'User Role',
      is_valid: 'Valid'
    },
    companySetting: {
      company_name: 'Corporate Name',
      city: 'City',
      address: 'Detailed Address',
      manager: 'Person In Charge',
      contact_tel: 'Contact Information'
    },
    ownerOfCargo: {
      goods_owner_name: 'Owner Of Cargo',
      city: 'City',
      address: 'Detailed Address',
      manager: 'Person In Charge',
      contact_tel: 'Contact Information',
      creator: 'Creator',
      create_time: 'Create Time'
    },
    commodityCategorySetting: {
      category_name: 'Commodity category',
      parent_name: 'Parent Category',
      creator: 'Creator',
      create_time: 'Create Time'
    },
    roleMenu: {
      role_name: 'Role Name',
      menu_name: 'Menu Name',
      beforeUpdateOrDel: 'Please select the data to be processed first!',
      operation: 'Operation permissions',
      dataEmpty: 'Empty data',
      expandRow: 'Expand rows',
      opeartionFunctionName: {
        warehouseSetting: {
          warehouse: 'Warehouse Setting',
          area: 'Reservoir Setting',
          location: 'Location Setting'
        },
        stockManagement: {
          area: 'Stock Location',
          stock: 'Stock'
        },
        stockAsn: {
          notice: 'Arrival notice',
          delivered: 'To Be Delivered',
          unloaded: 'To Be Unloaded',
          sorted: 'To Be Sorted',
          putOnTheShelf: 'To Be Put On The Shelf',
          detail: 'Receipt Details'
        },
        deliveryManagement: {
          invoice: 'Shipment',
          picked: 'Picked',
          packaged: 'Packaged',
          weighed: 'Weighed',
          delivered: 'Delivered',
          signedIn: 'Signed In'
        }
      },
      operationTitle: {
        add: 'Add',
        export: 'Export',
        refresh: 'Refresh',
        save: 'Save',
        delete: 'Delete',
        import: 'Import',
        resetPwd: 'Reset password',
        split: 'Split processing',
        group: 'Combined processing',
        confirmOpeartion: 'Confirm operation',
        confirmAdjust: 'Confirm adjustment',
        confirm: 'Confirm operation',
        freeze: 'Freeze',
        unfreeze: 'Unfreeze',
        editCount: 'Edit quantity',
        editArrival: 'Edit notice of arrival',
        revoke: 'Revoke',
        package: 'Pack',
        weigh: 'Weigh',
        delivery: 'Delivery',
        setCarrier: 'Set carrier',
        signIn: 'Sign in',
        saftyStock: 'Safety stock'
      },
      modalTitle: {
        editMenuAction: 'Edit menu operation permissions',
        actionTitle: 'Operation permissions'
      }
    },
    commodityManagement: {
      spu_code: 'Commodity Code',
      spu_name: 'Commodity Name',
      category_name: 'Commodity Category',
      spu_description: 'Commodity Description',
      bar_code: 'Specification Code',
      sku_code: 'Specification Code',
      sku_name: 'Specification Name',
      supplier_name: 'Supplier Name',
      brand: 'Brand',
      unit: 'Commodity Unit',
      cost: 'Commodity Cost',
      price: 'Commodity Price',
      origin: 'origin',
      length_unit: 'Length Unit',
      volume_unit: 'Volume Unit',
      weight_unit: 'Weight Unit',
      weight: 'Commodity Weight',
      lenght: 'Commodity Length',
      width: 'Commodity Width',
      height: 'Commodity Height',
      volume: 'Commodity Volume',
      saftyStock: 'Safety stock'
    }
  },
  wms: {
    stock: {
      stockSelectModal: 'Stock Select Modal',
      skuSelectModal: 'Commodity Select Modal',
      warehouse: 'Warehouse Name',
      location_name: 'Location Code',
      qty_available: 'Available Qty'
    },
    warehouseWorking: {
      warehouseProcessing: {
        job_code: 'Job Code',
        job_type: 'Job Type',
        process_status: 'Process Status',
        processor: 'Processor',
        process_time: 'Process Time',
        qty: 'Qty',
        is_source: 'Is Source',
        spu_code: 'Commodity Code',
        spu_name: 'Commodity Name',
        sku_code: 'Specification Code',
        sku_name: 'Specification Name',
        target_warehouse: 'Target Warehouse',
        target_location: 'Target Location',
        unit: 'Unit',
        is_update_stock: 'Is Updated Stock',
        creator: 'Creator',
        create_time: 'Create Time',
        last_update_time: 'Last Update Time',
        adjust_status: 'Is Updated Stock',
        source: 'Source',
        target: 'Target',
        process_split: 'Split Processing',
        process_combine: 'Combine Processing',
        confirmProcess: 'Confirm Process',
        confirmAdjust: 'Confirm Adjust',
        qtyMoreThanAvailable: 'Can\'t more than the number of Available',
        beforeConfirmProcess: 'Are you sure to process this data?',
        beforeConfirmAdjust: 'Are you sure to adjust this data?',
        alreadyProcess: 'The data can\'t delete because it had been processed',
        alreadyAdjust: 'The data can\'t delete because it had been adjusted'
      },
      warehouseMove: {
        job_code: 'Job No',
        move_status: 'Move Status',
        qty: 'Qty',
        handler: 'Handler',
        handle_time: 'Handle Time',
        orig_goods_warehouse: 'Origin Warehouse',
        orig_goods_location_name: 'Origin Location',
        dest_googs_warehouse: 'Target Warehouse',
        dest_googs_location_name: 'Target Location',
        confirmMove: 'Confirm Move',
        creator: 'Creator',
        create_time: 'Create Time',
        beforeConfirmMove: 'Are you sure to move this data?',
        unadjust: 'Unadjust',
        adjusted: 'Adjusted'
      },
      warehouseFreeze: {
        job_code: 'Job Code',
        job_type: 'Job Type',
        handler: 'Handler',
        handle_time: 'Handle Time',
        creator: 'Creator',
        create_time: 'Create Time',
        warehouse: 'Warehouse',
        location_name: 'Location Code',
        freeze: 'Freeze',
        unfreeze: 'Unfreeze'
      },
      warehouseAdjust: {
        job_code: 'Job Code',
        job_type: 'Job Type',
        warehouse: 'Warehouse',
        location_name: 'Location Code',
        handler: 'Handler',
        handle_time: 'Handle Time',
        creator: 'Creator',
        create_time: 'Create Time',
        qty: 'Difference Qty',
        warehouseTake: 'Warehouse Take',
        processCombine: 'Warehouse Process',
        processSplit: 'Warehouse Process',
        warehouseMove: 'Warehouse Move',
        confirmAdjust: 'Confirm Adjust',
        beforeConfirmAdjust: 'Are you sure to adjust this data?'
      },
      warehouseTaking: {
        job_code: 'Job Code',
        job_status: 'Job Status',
        warehouse: 'Warehouse',
        location_name: 'Location Code',
        book_qty: 'Book Qty',
        counted_qty: 'Actual Qty',
        difference_qty: 'Difference Qty',
        handler: 'Handler',
        handle_time: 'Handle Time',
        creator: 'Creator',
        create_time: 'Create Time',
        confirmTaking: 'Confirm Taking',
        unfinish: 'Unfinish',
        finish: 'Finish',
        confirmAdjust: 'Confirm Adjust',
        beforeConfirmAdjust: 'Are you sure to adjust this data?',
        addFromCommodity: 'Choose From Commodity',
        addFromStock: 'Choose From Inventory',
        addTips: 'You can choose goods and the location to add a new record when there is no target inventory'
      }
    },
    stockManagement: {
      stockLocation: 'Stock Location',
      stock: 'Stock'
    },
    stockLocation: {
      warehouse_name: 'Warehouse',
      location_name: 'Location Code',
      spu_code: 'Commodity code',
      spu_name: 'Trade name',
      sku_id: 'Sku Id',
      sku_code: 'Specification code',
      sku_name: 'Form Name',
      qty: 'Quantity',
      qty_available: 'Available Quantity',
      qty_locked: 'Locked Quantity',
      qty_frozen: 'Frozen Quantity'
    },
    stockList: {
      spu_code: 'Commodity code',
      spu_name: 'Trade name',
      sku_code: 'Specification code',
      sku_id: 'Sku Id',
      qty: 'Quantity',
      qty_available: 'Available Quantity',
      qty_locked: 'Locked Quantity',
      qty_frozen: 'Frozen Quantity',
      qty_asn: 'Asn Quantity',
      qty_to_unload: 'Unload Quantity',
      qty_to_sort: 'Sort Quantity',
      qty_sorted: 'Sorted Quantity',
      shortage_qty: 'Shortage Quantity'
    },
    stockAsn: {
      tabNotice: 'Notice Of Arrival',
      tabToDoArrival: 'To Be Delivered',
      tabToDoUnload: 'To Be Unloaded',
      tabToDoSorting: 'To Be Sorted',
      tabToDoGrounding: 'To Be Put On The Shelf',
      tabReceiptDetails: 'Receipt Details'
    },
    stockAsnInfo: {
      id: 'ID',
      asn_no: 'Asn No',
      asn_status: 'Asn Status',
      spu_id: 'Spu Id',
      spu_code: 'Commodity code',
      spu_name: 'Trade name',
      sku_id: 'Sku Id',
      sku_code: 'Specification code',
      sku_name: 'Form Name',
      origin: 'Origin',
      length_unit: 'Length Unit',
      volume_unit: 'Volume Unit',
      weight_unit: 'Weight Unit',
      asn_qty: 'Asn Quantity',
      actual_qty: 'Actual Quantity',
      sorted_qty: 'Sorted Quantity',
      shortage_qty: 'Shortage Quantity',
      more_qty: 'More Quantity',
      damage_qty: 'Damage Quantity',
      weight: 'Weight',
      volume: 'Volume',
      supplier_id: 'Supplier Id',
      supplier_name: 'Supplier Name',
      goods_owner_id: 'Goods Owner Id',
      goods_owner_name: 'Goods Owner Name',
      is_valid: 'Valid'
    },
    skuInfo: {
      spu_id: 'Spu Id',
      spu_code: 'Commodity code',
      spu_name: 'Trade name',
      category_id: 'Commodity Category ID',
      category_name: 'Commodity Category',
      spu_description: 'Commodity Description',
      bar_code: 'Specification Code',
      supplier_id: 'Supplier Id',
      supplier_name: 'Supplier Name',
      brand: 'Brand',
      origin: 'origin',
      length_unit: 'Length Unit',
      volume_unit: 'Volume Unit',
      weight_unit: 'Weight Unit',
      sku_id: 'Sku Id',
      sku_code: 'Specification code',
      sku_name: 'Form Name',
      weight: 'Commodity Weight',
      lenght: 'Commodity Length',
      width: 'Commodity Width',
      height: 'Commodity Height',
      volume: 'Commodity Volume',
      unit: 'Commodity Unit',
      cost: 'Commodity Cost',
      price: 'Commodity Price'
    },
    deliveryManagement: {
      shipment: 'Invoice',
      preShipment: 'Pre Shipment',
      newShipment: 'New Shipment',
      goodsToBePicked: 'To Be Picked',
      picked: 'Picked',
      toBePackaged: 'To Be Packaged',
      package: 'Pack',
      packaged: 'Packaged',
      toBeWeighed: 'To Be Weighed',
      weigh: 'Weigh',
      weighed: 'Weighed',
      delivery: 'Delivery',
      toBeDelivered: 'To Be Delivered',
      outOfWarehouse: 'Delivered',
      signIn: 'Sign In',
      signedIn: 'Signed In',
      dispatch_no: 'Shipment No',
      dispatch_status: 'Shipment Doc Status',
      qty: 'Total Quantity',
      detailQty: 'Quantity',
      weight: 'Total Weight',
      volume: 'Total Volume',
      customer_name: 'Customer Name',
      spu_code: 'Commodity Code',
      spu_name: 'Commodity Name',
      sku_code: 'Specification Code',
      sku_name: 'Specification Name',
      unit: 'Commodity Unit',
      creator: 'Created By',
      create_time: 'Creation Time',
      confirmOrder: 'Confirm Shipment Doc',
      orderDetail: 'Shipment Order Product Details',
      quantityOverflow: 'The sum of shipment quantity cannot exceed the shipment document quantity',
      quantityIsZero: 'Please ensure that at least one of the selected goods has an issue quantity greater than 0!',
      NoItemSelected: 'Please select at least one commodity to delivered!',
      confirmSuccess: 'Confirm the shipment order successfully!',
      confirmPicking: 'Confirm Picking',
      confirmDelivery: 'Confirm Delivery',
      confirmSignIn: 'Confirm Signing',
      detailWeight: 'Weight',
      unpackage_qty: 'Quantity to be packaged',
      unweighing_qty: 'Quantity to be weighed',
      validQtyMsgPackage: 'Please enter a valid value, which cannot exceed the total quantity',
      validQtyMsgSignIn: 'Please enter a valid value',
      signInQty: 'Actual signed in quantity',
      incorrectStatusMsg: 'Operation failed, the status should be',
      backToThePreviousStep: 'Recall to previous process',
      confirmBack: 'Confirm withdrawal',
      or: ' or ',
      irreversible: 'This operation is irreversible',
      detailQuantityIsZero: 'Shipment quantity cannot be 0',
      qty_available: 'Available Quantity',
      spu_description: 'Product Description',
      bar_code: 'Bar Code',
      order_qty: 'Order Quantity',
      unpicked_qty: 'Quantity to be picked',
      picked_qty: 'Picked Quantity',
      detailVolume: 'Volume',
      package_qty: 'Packed Quantity',
      package_person: 'Packer',
      package_time: 'Packaging Time',
      weighing_no: 'Weighing sheet No',
      package_no: 'Packaging serial No',
      weighing_person: 'Weigher',
      weighing_weight: 'Weighing Weight',
      waybill_no: 'Waybill No',
      carrier: 'Carrier',
      damagedQuantity: 'Damaged quantity upon arrival',
      setFreight: 'Set Carrier',
      departure_city: 'Originating city',
      arrival_city: 'City of arrival',
      ViewInventoryDetails: 'View product details',
      invalidValue: 'Please enter a valid value',
      exceedingQuantity: 'Cannot exceed the total quantity',
      state: 'State',
      packageTodo: 'Unpacked',
      packageReady: 'Packaged',
      weighTodo: 'Unweighed',
      weighReady: 'Weighed',
      deliveryTodo: 'Undelivery',
      deliveryReady: 'Deliveryed',
      opeartionCheckboxIsNull: 'No actionable data selected!',
      warehouse_name: 'Warehouse name'
    },
    saftyStock: {}
  }
}
