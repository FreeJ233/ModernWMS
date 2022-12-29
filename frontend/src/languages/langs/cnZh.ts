export default {
  system: {
    hookComponent: {
      dialog: {
        defaultClose: '关闭',
        defaultConfirm: '确认',
        defaultTitle: '提示'
      }
    },
    page: {
      add: '新增',
      update: '修改',
      refresh: '刷新',
      export: '导出',
      operate: '操作',
      edit: '编辑',
      delete: '删除',
      close: '关闭',
      submit: '提交',
      reset: '重置',
      confirm: '确认',
      insertOneRow: '新增一行',
      view: '查看'
    },
    tips: {
      success: '成功!',
      fail: '失败!',
      beforeDeleteMessage: '您确定要删除此条数据吗?',
      beforeDeleteDetailMessage: '您确定要删除此行吗?',
      detailLengthIsZero: '请添加明细数据!',
      detailHasItemRepeat: '明细中含有重复项目!',
      noData: '暂无数据'
    },
    checkText: {
      checkFormFail: '操作失败, 请检查数据后重试!',
      mustInput: '请填写'
    },
    homeHeader: {
      logout: '注销'
    },
    combobox: {
      sex: {
        male: '男',
        female: '女'
      },
      yesOrNo: {
        yes: '是',
        no: '否'
      }
    }
  },
  router: {
    sideBar: {
      homepage: '首页',
      baseModule: '基础设置',
      ownerOfCargo: '货主信息',
      menuBasicSettings: '菜单基础设置',
      userManagement: '用户管理',
      commodityCategorySetting: '商品类别设置',
      commodityManagement: '商品管理',
      userRoleSetting: '用户角色设置',
      companySetting: '公司信息',
      freightSetting: '运费设置',
      warehouseSetting: '仓库设置',
      customer: '客户信息',
      supplier: '供应商信息',
      roleMenu: '角色菜单设置',
      stockManagement: '库存管理',
      warehouseWorkingModule: '仓内作业',
      warehouseProcessing: '仓内加工'
    }
  },
  login: {
    welcomeTitle: '欢迎来到ModernWMS!👋🏻',
    mainButtonLabel: '登录',
    rememberTips: '记住账号密码',
    userName: '用户名',
    password: '密码',
    loginSuccess: '登录成功',
    notAuthority: '您的账号不包含任何菜单, 请联系管理员增加!'
  },
  base: {
    freightSetting: {
      carrier: '承运商',
      departure_city: '始发城市',
      arrival_city: '到货城市',
      price_per_weight: '单公斤运费',
      price_per_volume: '单立方米运费',
      min_payment: '最小运费',
      creator: '创建人',
      create_time: '创建时间',
      last_update_time: '最后更新时间',
      is_valid: '是否有效'
    },
    userManagement: {
      user_num: '员工编号',
      user_name: '员工名称',
      user_role: '角色',
      contact_tel: '联系方式',
      sex: '性别',
      is_valid: '是否有效',
      restPwd: '重置密码',
      checkboxIsNull: '请选中数据!',
      beforeResetPwd: '您确定要重置这些用户的密码吗?',
      afterResetPwd: '重置密码成功!'
    },
    warehouseSetting: {
      warehouseSetting: '仓库设置',
      reservoirSetting: '库区设置',
      locationSetting: '库位设置',
      locationSelectModal: '库位选择框',
      email: 'Email',
      warehouse_name: '仓库名称',
      city: '所在城市',
      address: '详细地址',
      contact_tel: '联系方式',
      manager: '负责人',
      is_valid: '是否有效',
      area_name: '库区名称',
      area_property: '库区类型',
      location_name: '库位编码',
      location_length: '库位长(m)',
      location_width: '库位宽(m)',
      location_heigth: '库位高(m)',
      location_volume: '库位容积（m³）',
      location_load: '库位承重（kg）',
      roadway_number: '巷道号',
      shelf_number: '货架号',
      layer_number: '层号',
      tag_number: '位号',
      picking_area: '拣货区',
      stocking_area: '备货区',
      receiving_area: '收货区',
      return_area: '退货区',
      defective_area: '次品区',
      inventory_area: '存货区',
      creator: '创建人',
      create_time: '创建时间',
      last_update_time: '最后更新时间'
    },
    customer: {
      customer_name: '客户名称',
      city: '所在城市',
      address: '详细地址',
      manager: '负责人',
      email: 'Email',
      contact_tel: '联系方式',
      creator: '创建人',
      create_time: '创建时间',
      last_update_time: '最后更新时间',
      is_valid: '是否有效'
    },
    supplier: {
      supplier_name: '供应商名称',
      city: '所在城市',
      address: '详细地址',
      email: 'Email',
      manager: '负责人',
      contact_tel: '联系方式',
      creator: '创建人',
      create_time: '创建时间',
      last_update_time: '最后更新时间',
      is_valid: '是否有效'
    },
    userRoleSetting: {
      role_name: '用户角色',
      is_valid: '是否有效'
    },
    companySetting: {
      company_name: '公司名称',
      city: '所在城市',
      address: '详细地址',
      manager: '负责人',
      contact_tel: '联系方式'
    },
    ownerOfCargo: {
      goods_owner_name: '货主名称',
      city: '所在城市',
      address: '详细地址',
      manager: '负责人',
      contact_tel: '联系方式',
      creator: '创建人',
      create_time: '创建时间'
    },
    commodityCategorySetting: {
      category_name: '商品类别',
      parent_name: '所属类别',
      creator: '创建人',
      create_time: '创建时间'
    },
    roleMenu: {
      role_name: '角色名称',
      menu_name: '菜单名称',
      beforeUpdateOrDel: '请先选择需要处理的数据!'
    },
    commodityManagement: {
      spu_code: '商品编码',
      spu_name: '商品名称',
      category_name: '商品类别',
      spu_description: '商品描述',
      bar_code: '商品条码',
      sku_code: '规格编码',
      sku_name: '规格编码',
      supplier_name: '供应商名称',
      brand: '品牌',
      unit: '商品单位',
      cost: '商品成本',
      price: '商品价格',
      origin: '产地',
      length_unit: '长度单位',
      volume_unit: '体积单位',
      weight_unit: '重量单位'
    }
  },
  wms: {
    stock: {
      stockSelectModal: '库存选择框',
      skuSelectModal: '商品选择框',
      warehouse: '仓库名称',
      location_name: '库位编码',
      qty_available: '可用数量',
    },
    warehouseWorking: {
      warehouseProcessing: {
        job_code: '作业单号',
        job_type: '作业类型',
        process_status: '加工状态',
        processor: '操作人',
        process_time: '操作时间',
        qty: '数量',
        is_source: '是否来源商品',
        spu_code: '商品编码',
        spu_name: '商品名称',
        sku_code: '规格编码',
        sku_name: '规格名称',
        target_warehouse: '目标仓库',
        target_location: '目标库位',
        unit: '商品单位',
        is_update_stock: '是否已更新库存',
        creator: '创建人',
        create_time: '创建时间',
        last_update_time: '最后更新时间',
        adjust_status: '是否已调整',
        source: '来源',
        target: '目标',
        process_split: '拆分加工',
        process_combine: '组合加工',
        confirmProcess: '确认加工',
        confirmAdjust: '确认调整',
        qtyMoreThanAvailable: '不可超过可用数量',
        beforeConfirmProcess: '您确认对该条数据进行加工吗？',
        beforeConfirmAdjust: '您确认对该条数据进行调整吗？',
        alreadyProcess: '该数据已完成加工，不可删除',
        alreadyAdjust: '该数据已完成调整，不可删除'
      }
    },
    stockManagement: {
      stockLocation: '库区库存',
    },
    stockLocation: {
      warehouse: '仓库名称',
      location_name: '库位名称',
      spu_code: '商品编码',
      spu_name: '商品名称',
      sku_id: '规格标识',
      sku_code: '规格编码',
      sku_name: '规格名称',
      qty: '数量',
      qty_available: '可用数量',
      qty_locked: '锁定数量',
      qty_frozen: '冻结数量'
    }
  }
}
