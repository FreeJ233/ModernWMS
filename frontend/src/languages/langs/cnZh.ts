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
      print: '打印',
      preView: '预览',
      submit: '提交',
      reset: '重置',
      confirm: '确认',
      insertOneRow: '新增一行',
      view: '查看',
      import: '导入',
      chooseFile: '选择文件',
      exportTemplate: '导出模板',
      noData: '暂无数据'
    },
    tips: {
      success: '成功!',
      fail: '失败!',
      beforeDeleteMessage: '您确定要删除此条数据吗?',
      beforeDeleteDetailMessage: '您确定要删除此行吗?',
      detailLengthIsZero: '请添加明细数据!',
      detailHasItemRepeat: '明细中含有重复项目!',
      noData: '暂无数据',
      beforeAsnConfirm: '确认到货？',
      beforeAsnUnload: '确认卸货？',
      beforeAsnSorted: '确认分拣完成？',
      requestTimeout: '请求超时！',
      requestFail: '接口请求失败，请重试',
      vaildEmail: '请输入正确的邮箱格式!',
      verifyPwd: '校验失败, 新密码与确认新密码不同!'
    },
    checkText: {
      checkFormFail: '操作失败, 请检查数据后重试!',
      mustInput: '请填写',
      mustSelect: '请选择',
      integer: '整数',
      decimal: ' 小数',
      pleaseEnter: '请输入长度为',
      inputIntMsg: '的整数位',
      inputDecimalMsg: '的小数位',
      lengthValid: '字段长度应该在'
    },
    homeHeader: {
      logout: '注销',
      changePwd: '修改密码',
      oldPwd: '旧密码',
      newPwd: '新密码',
      confrimNewPwd: '确认新密码',
      log: '系统日志'
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
    },
    pager: {
      pageSizes: '条/页',
      goTo: '前往',
      total: '共',
      record: '条记录'
    },
    viewLog: {
      user_name: '操作人',
      action_content: '操作内容',
      action_time: '操作时间'
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
      userRoleSetting: '角色设置',
      companySetting: '公司信息',
      freightSetting: '运费设置',
      warehouseSetting: '仓库设置',
      customer: '客户信息',
      supplier: '供应商信息',
      roleMenu: '菜单设置',
      stockManagement: '库存管理',
      warehouseWorkingModule: '仓内作业',
      warehouseProcessing: '仓内加工',
      warehouseMove: '库存移动',
      warehouseFreeze: '库存冻结',
      warehouseAdjust: '库存调整',
      warehouseTaking: '库存盘点',
      deliveryManagement: '发货管理',
      stockAsn: '收货管理',
      statisticAnalysis: '统计分析',
      saftyStock: '安全库存'
    }
  },
  login: {
    welcomeTitle: '欢迎来到ModernWMS!👋🏻',
    mainButtonLabel: '登录',
    rememberTips: '记住账号密码',
    userName: '用户名',
    password: '密码',
    loginSuccess: '登录成功',
    notAuthority: '该账号未分配菜单权限，请联系管理员',
    registerTips: '没有账号？点此注册一个！',
    register: '注册'
  },
  homepage: {
    subTitle: '现代化仓库管理系统'
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
      is_valid: '是否有效',
      freightSelectModal: '运费选择框'
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
      afterResetPwd: '重置密码成功, 新密码为: ',
      user_register_name: '用户名',
      email: 'Email',
      auth_string: '密码'
    },
    warehouseSetting: {
      warehouseSetting: '仓库设置',
      reservoirSetting: '库区设置',
      locationSetting: '库位设置',
      warehourseSelectModal: '库位选择框',
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
      beforeUpdateOrDel: '请先选择需要处理的数据!',
      operation: '操作权限',
      dataEmpty: '暂无权限',
      expandRow: '展开行',
      opeartionFunctionName: {
        warehouseSetting: {
          warehouse: '仓库设置',
          area: '库区设置',
          location: '库位设置'
        },
        stockManagement: {
          area: '库位列表',
          stock: '库存列表'
        },
        stockAsn: {
          notice: '到货通知',
          delivered: '待到货',
          unloaded: '待卸货',
          sorted: '待分拣',
          putOnTheShelf: '待上架',
          detail: '收货明细'
        },
        deliveryManagement: {
          invoice: '发货单',
          picked: '拣货',
          packaged: '打包',
          weighed: '称重',
          delivered: '出库',
          signedIn: '已签收'
        }
      },
      operationTitle: {
        add: '新增',
        export: '导出',
        refresh: '刷新',
        save: '保存',
        delete: '删除',
        import: '导入',
        resetPwd: '重置密码',
        split: '拆分加工',
        group: '组合加工',
        confirmOpeartion: '确认操作',
        confirmAdjust: '确认调整',
        confirm: '确认操作',
        freeze: '冻结',
        unfreeze: '解冻',
        editCount: '编辑数量',
        editArrival: '编辑上架数量',
        revoke: '撤回',
        package: '打包',
        weigh: '称重',
        delivery: '出库',
        setCarrier: '设置承运单位',
        signIn: '签收',
        saftyStock: '安全库存'
      },
      modalTitle: {
        editMenuAction: '编辑菜单操作权限',
        actionTitle: '操作权限'
      }
    },
    commodityManagement: {
      spu_code: '商品编码',
      spu_name: '商品名称',
      sku_code: '规格编码',
      sku_name: '规格名称',
      category_name: '商品类别',
      spu_description: '商品描述',
      bar_code: '商品条码',
      supplier_name: '供应商名称',
      brand: '品牌',
      unit: '商品单位',
      cost: '商品成本',
      price: '商品价格',
      origin: '产地',
      length_unit: '长度单位',
      volume_unit: '体积单位',
      weight_unit: '重量单位',
      weight: '商品重量',
      lenght: '商品长度',
      width: '商品宽度',
      height: '商品高度',
      volume: '商品体积',
      saftyStock: '安全库存'
    }
  },
  wms: {
    stock: {
      stockSelectModal: '库存选择框',
      skuSelectModal: '商品选择框',
      warehouse: '仓库名称',
      location_name: '库位编码',
      qty_available: '可用数量'
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
      },
      warehouseMove: {
        job_code: '作业单号',
        move_status: '作业状态',
        qty: '数量',
        handler: '操作人',
        handle_time: '操作时间',
        orig_goods_warehouse: '来源仓库',
        orig_goods_location_name: '来源库位',
        dest_googs_warehouse: '目标仓库',
        dest_googs_location_name: '目标库位',
        confirmMove: '确认移库',
        creator: '创建人',
        create_time: '创建时间',
        beforeConfirmMove: '您确认对该条数据进行移库吗？',
        unadjust: '未调整',
        adjusted: '已调整'
      },
      warehouseFreeze: {
        job_code: '作业单号',
        job_type: '作业类型',
        handler: '操作人',
        handle_time: '操作时间',
        creator: '创建人',
        create_time: '创建时间',
        warehouse: '所在仓库',
        location_name: '所在库位',
        freeze: '冻结',
        unfreeze: '解冻'
      },
      warehouseAdjust: {
        job_code: '作业单号',
        job_type: '作业类型',
        warehouse: '所在仓库',
        location_name: '所在库位',
        handler: '操作人',
        handle_time: '操作时间',
        creator: '创建人',
        create_time: '创建时间',
        qty: '调整差异数量',
        warehouseTake: '盘点',
        processCombine: '仓内加工',
        processSplit: '仓内加工',
        warehouseMove: '移库',
        confirmAdjust: '确认调整',
        beforeConfirmAdjust: '您确认对该条数据进行调整吗？'
      },
      warehouseTaking: {
        job_code: '作业单号',
        job_status: '作业状态',
        warehouse: '所在仓库',
        location_name: '所在库位',
        book_qty: '账面数量',
        counted_qty: '盘点数量',
        difference_qty: '差异数量',
        confirmTaking: '确认盘点',
        handler: '操作人',
        handle_time: '操作时间',
        creator: '创建人',
        create_time: '创建时间',
        unfinish: '待作业',
        finish: '已完成',
        confirmAdjust: '确认调整',
        beforeConfirmAdjust: '您确认对该条数据进行调整吗？',
        addFromCommodity: '选择商品',
        addFromStock: '选择库存',
        addTips: '当目标库存不存在时，可通过手动选择商品和库位来新增记录'
      }
    },
    stockManagement: {
      stockLocation: '库位列表',
      stock: '库存列表'
    },
    stockLocation: {
      warehouse_name: '仓库名称',
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
    },
    stockList: {
      spu_code: '商品编码',
      spu_name: '商品名称',
      sku_code: '规格编码',
      sku_id: '规格标识',
      qty: '数量',
      qty_available: '可用数量',
      qty_locked: '锁定数量',
      qty_frozen: '冻结数量',
      qty_asn: '到货通知书数量',
      qty_to_unload: '待卸货数量',
      qty_to_sort: '待分拣数量',
      qty_sorted: '已分拣数量',
      shortage_qty: '欠货数量'
    },
    stockAsn: {
      tabNotice: '到货通知',
      tabToDoArrival: '待到货',
      tabToDoUnload: '待卸货',
      tabToDoSorting: '待分拣',
      tabToDoGrounding: '待上架',
      tabReceiptDetails: '收货明细'
    },
    stockAsnInfo: {
      id: '标识',
      asn_no: '到货通知书编号',
      asn_status: '到货通知书状态',
      spu_id: '商品spu标识',
      spu_code: '商品编码',
      spu_name: '商品名称',
      sku_id: '商品sku标识',
      sku_code: '规格编码',
      sku_name: '规格名称',
      origin: '产地',
      length_unit: '长度单位',
      volume_unit: '体积单位',
      weight_unit: '重量单位',
      asn_qty: '到货通知书数据',
      actual_qty: '上架数量',
      sorted_qty: '分拣数量',
      shortage_qty: '短少数量',
      more_qty: '超量数量',
      damage_qty: '破损数量',
      weight: '总重量',
      volume: '总体积',
      supplier_id: '供应商标识',
      supplier_name: '供应商名称',
      goods_owner_id: '货主标识',
      goods_owner_name: '货主名称',
      is_valid: '是否有效'
    },
    skuInfo: {
      spu_id: '商品spu标识',
      spu_code: '商品编码',
      spu_name: '商品名称',
      category_id: '商品类别标识',
      category_name: '商品类别',
      spu_description: '商品描述',
      bar_code: '商品条码',
      supplier_id: '供应商标识',
      supplier_name: '供应商名称',
      brand: '品牌',
      origin: '产地',
      length_unit: '长度单位',
      volume_unit: '体积单位',
      weight_unit: '重量单位',
      sku_id: '规格标识',
      sku_code: '规格编码',
      sku_name: '规格名称',
      weight: '总重量',
      lenght: '商品长度',
      width: '商品宽度',
      height: '商品高度',
      volume: '商品体积',
      unit: '商品单位',
      cost: '商品成本',
      price: '商品价格'
    },
    deliveryManagement: {
      shipment: '发货单',
      preShipment: '预发货',
      newShipment: '新发货',
      goodsToBePicked: '待拣货',
      picked: '已拣货',
      toBePackaged: '待打包',
      package: '打包',
      packaged: '打包',
      toBeWeighed: '待称重',
      weigh: '称重',
      weighed: '称重',
      delivery: '出库',
      toBeDelivered: '待出库',
      outOfWarehouse: '出库',
      signIn: '签收',
      signedIn: '已签收',
      dispatch_no: '发货单号',
      dispatch_status: '发货单状态',
      qty: '总数量',
      detailQty: '数量',
      weight: '总重量',
      volume: '总体积',
      customer_name: '客户名称',
      spu_code: '商品编码',
      spu_name: '商品名称',
      sku_code: '规格编码',
      sku_name: '规格名称',
      unit: '商品单位',
      creator: '创建人',
      create_time: '创建时间',
      confirmOrder: '确认发货单',
      orderDetail: '发货单商品详情',
      quantityOverflow: '发货数量之和不能超出发货单数量',
      quantityIsZero: '请保证选择的商品至少有一项出库数量大于0!',
      NoItemSelected: '请至少选中一项商品进行出库!',
      confirmSuccess: '确认发货单成功!',
      confirmPicking: '确认拣货',
      confirmDelivery: '确认出库',
      confirmSignIn: '确认签收',
      detailWeight: '重量',
      unpackage_qty: '待打包数量',
      unweighing_qty: '待称重数量',
      validQtyMsgPackage: '请输入有效数值, 且不能超过总数量',
      validQtyMsgSignIn: '请输入有效数值, 且不能超过总数量',
      signInQty: '实际签收数量',
      incorrectStatusMsg: '操作失败, 状态应该为',
      backToThePreviousStep: '撤回到上一个流程',
      confirmBack: '确认撤回',
      or: '或',
      irreversible: '此操作不可逆',
      detailQuantityIsZero: '发货数量不能为0',
      qty_available: '可用数量',
      spu_description: '商品描述',
      bar_code: '条码',
      order_qty: '订单数量',
      unpicked_qty: '待拣货数量',
      picked_qty: '已拣货数量',
      detailVolume: '体积',
      package_qty: '已打包数量',
      package_person: '打包员',
      package_time: '打包时间',
      weighing_no: '称重单号',
      package_no: '打包流水号',
      weighing_person: '称重员',
      weighing_weight: '称重重量',
      waybill_no: '运单号',
      carrier: '承运单位',
      damagedQuantity: '到货破损数量',
      setFreight: '设置承运单位',
      departure_city: '始发城市',
      arrival_city: '到货城市',
      ViewInventoryDetails: '查看商品明细',
      invalidValue: '请输入有效数值',
      exceedingQuantity: '不能超过总数量',
      state: '状态',
      packageTodo: '未打包',
      packageReady: '已打包',
      weighTodo: '未称重',
      weighReady: '已称重',
      deliveryTodo: '未出库',
      deliveryReady: '已出库',
      opeartionCheckboxIsNull: '未选中可操作的数据!',
      warehouse_name: '仓库名称'
    },
    saftyStock: {}
  }
}
