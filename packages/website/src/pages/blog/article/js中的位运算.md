# js 中的位运算

## 一、计算机中的有符号数的三种表示方法

### 1、原码

### 2、反码

### 3、补码

负数表示为 原码取反然后加 1
补码的0是唯一的


## 二、JavaScript语言中的位运算

### 1、与 & 

### 2、或 | 

### 3、非 ~

### 4、异或 ^ 

### 5、左移 <<

### 6、右移 >>

### 7、无符号右移 >> 


### 8、补充

#### 1、为什么会存在无符号右移和右移两种？

因为在补码表示负数的时候，最高位是符号位，所以右移的时候，需要判断是否带符号，带符号右移，则补码右移，最高位补1，无符号右移则最高位补0

#### 2、为什么左移不存在无符号和有符号两种

因为补码的所有正数表示和原码是一样的，最高位是0，但是在标准的浮点数表示中，正数的上限是很大的，所以一般情况下是不存在超出上限的情况的，所以实际开发中不是很需要无符号的左移(TODO 这里是否可以考虑通过负数无符号右移即可表示正数)


#### 3、位运算的